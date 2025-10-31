import Pokeball from "_shared/presentation/components/pokeball-loading";
import {
  HambergerMenu,
  LogoutCurve,
  Lovely,
  Profile,
  Setting2,
} from "iconsax-react";
import { useAppDispatch, useAppSelector } from "infrastructure/store";
import { deleteTokenAuth } from "infrastructure/store/auth";
import { deleteAllPokemon } from "infrastructure/store/pokemon";
import { mpRouteName } from "presentation/pages/my-pokemon/index.pages";
import {
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
  useRef,
  useState,
} from "react";
import { Avatar, Button, Menu, Modal } from "react-daisyui";
import { Link, NavLink } from "react-router-dom";

interface HeaderProps {
  className?: string;
}

interface HeaderMenuProps {}

interface ModalLogoutProps {
  ref: React.DialogHTMLAttributes<HTMLDialogElement>;
  handleClose: () => void;
  handleLogout: () => void;
}

const LogoutModal: ForwardRefRenderFunction<
  HTMLDialogElement,
  ModalLogoutProps
> = ({ handleClose, handleLogout }, ref) => {
  return (
    <div className="font-sans">
      <Modal backdrop={true} ref={ref} className="bg-white">
        <Modal.Header className="font-bold">
          Are you sure want to log out?
        </Modal.Header>
        <Modal.Body>
          Press ESC key or click the button below to close
        </Modal.Body>
        <Modal.Actions>
          <Button onClick={handleLogout} className="text-white bg-red-500">
            Yes, sure
          </Button>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

const ForwardedRefLogoutModal = forwardRef(LogoutModal);

const Header: React.FC<HeaderProps> = ({ className }): JSX.Element => {
  const { data } = useAppSelector((state) => state.auth);
  const [toolbarMenuVisible, setToolbarMenuVisible] = useState<boolean>(false);
  const toggleToolbarMenuVisible = () => setToolbarMenuVisible((prev) => !prev);
  const dispatch = useAppDispatch();
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleShowDialog = useCallback(() => {
    modalRef.current?.showModal();
  }, [modalRef]);

  const handleCloseDialog = useCallback(() => {
    modalRef.current?.close();
  }, [modalRef]);

  const handleLogout = () => {
    dispatch(deleteTokenAuth());
    dispatch(deleteAllPokemon())
  };

  return (
    <nav
      className={`z-[998] select-none h-[60px] bg-white py-4 px-8 fixed right-0 top-0 flex justify-end items-center gap-3 ${className}`}
    >
      <NavLink to={mpRouteName}>
        <Pokeball />
      </NavLink>

      <div
        onClick={toggleToolbarMenuVisible}
        className="flex items-center gap-2 cursor-pointer"
      >
        <p>{data?.data.name}</p>
        <Avatar
          size="xs"
          shape="circle"
          src="https://avatars.githubusercontent.com/u/2?v=4"
        />
      </div>
      <ForwardedRefLogoutModal
        ref={modalRef}
        handleLogout={handleLogout}
        handleClose={handleCloseDialog}
      />
      {toolbarMenuVisible && (
        <Menu className="z-[999] fixed top-[60px] right-[20px] bg-white w-56">
          <Menu.Item>
            <Link
              to="#"
              className="flex items-center gap-2"
              onClick={handleShowDialog}
            >
              <LogoutCurve size={20} color="#FF3838" />
              <span className="font-bold text-[#FF3838]">Logout</span>
            </Link>
          </Menu.Item>
        </Menu>
      )}
    </nav>
  );
};

export default Header;
