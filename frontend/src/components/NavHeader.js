/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
	BookmarkAltIcon,
	CalendarIcon,
	CursorClickIcon,
	MenuIcon,
	PhoneIcon,
	PlayIcon,
	RefreshIcon,
	ShieldCheckIcon,
	SupportIcon,
	UsersIcon,
	ViewGridIcon,
	ShoppingCartIcon,
	XIcon,
	ViewBoardsIcon,
	StatusOnlineIcon,
	StatusOfflineIcon,
} from '@heroicons/react/outline';
import { FaShoppingCart } from 'react-icons/fa';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import SearchBox from './SearchBox';
import { logout } from '../actions/userActions';
import { Link } from 'react-router-dom';

const solutions = [
	{
		name: 'Users',
		description:
			'Get a better understanding of where your traffic is coming from.',
		to: '/admin/userlist',
		icon: UsersIcon,
	},
	{
		name: 'Products',
		description: 'Speak directly to your customers in a more meaningful way.',
		to: '/admin/productlist',
		icon: ViewGridIcon,
	},
	{
		name: 'Orders',
		description: "Your customers' data will be safe and secure.",
		to: '/admin/orderlist',
		icon: ViewBoardsIcon,
	},
];
const callsToAction = [
	{ name: 'Watch Demo', href: '#', icon: PlayIcon },
	{ name: 'Contact Sales', href: '#', icon: PhoneIcon },
];
const resources = [
	{
		name: 'Profile',
		to: '/profile',
		icon: SupportIcon,
		escription: 'View your profile',
	},

	{
		name: 'Events',
		description:
			'See what meet-ups and other events we might be planning near you.',
		to: '/',
		icon: CalendarIcon,
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const NavHeader = () => {
	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	const { userInfo } = userLogin;

	const logoutHandler = () => {
		dispatch(logout());
	};

	return (
		<Popover className="relative bg-white z-50">
			{({ open }) => (
				<>
					<div className="max-w-7xl mx-auto px-4 sm:px-6">
						<div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
							<div className="flex justify-start lg:w-0 lg:flex-1">
								<Link to="/">
									<span className="sr-only">SME Shop</span>
									<img
										className="h-8 w-auto sm:h-10"
										src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
										alt=""
									/>
								</Link>
							</div>
							<div>
								<Route
									render={({ history }) => <SearchBox history={history} />}
								/>
							</div>
							<div className="-mr-2 -my-2 md:hidden">
								<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
									<span className="sr-only">Open menu</span>
									<MenuIcon className="h-6 w-6" aria-hidden="true" />
								</Popover.Button>
							</div>
							<Popover.Group as="nav" className="hidden md:flex space-x-10">
								{userInfo && userInfo.isAdmin && (
									<Popover className="relative">
										{({ open }) => (
											<>
												<Popover.Button
													className={classNames(
														open ? 'text-gray-900' : 'text-gray-500',
														'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
													)}
												>
													<span>Admin</span>
													<ChevronDownIcon
														className={classNames(
															open ? 'text-gray-600' : 'text-gray-400',
															'ml-2 h-5 w-5 group-hover:text-gray-500'
														)}
														aria-hidden="true"
													/>
												</Popover.Button>

												<Transition
													show={open}
													as={Fragment}
													enter="transition ease-out duration-200"
													enterFrom="opacity-0 translate-y-1"
													enterTo="opacity-100 translate-y-0"
													leave="transition ease-in duration-150"
													leaveFrom="opacity-100 translate-y-0"
													leaveTo="opacity-0 translate-y-1"
												>
													<Popover.Panel
														static
														className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
													>
														<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
															<div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
																{solutions.map((item) => (
																	<Link
																		key={item.name}
																		to={item.to}
																		className="-m-3 p-2 flex items-start rounded-lg hover:bg-gray-50"
																	>
																		<item.icon
																			className="flex-shrink-0 h-6 w-6 text-indigo-600"
																			aria-hidden="true"
																		/>
																		<div className="ml-4">
																			<p className="text-base font-medium text-gray-900">
																				{item.name}
																			</p>
																			<p className="mt-1 text-sm text-gray-500">
																				{item.description}
																			</p>
																		</div>
																	</Link>
																))}
															</div>
															<div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
																{callsToAction.map((item) => (
																	<div key={item.name} className="flow-root">
																		<Link
																			href={item.to}
																			className="-m-3 p-2 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
																		>
																			<item.icon
																				className="flex-shrink-0 h-6 w-6 text-gray-400"
																				aria-hidden="true"
																			/>
																			<span className="ml-3">{item.name}</span>
																		</Link>
																	</div>
																))}
															</div>
														</div>
													</Popover.Panel>
												</Transition>
											</>
										)}
									</Popover>
								)}

								<Link
									to="/cart"
									className="-m-3 relative text-base font-medium text-gray-500 hover:text-gray-900 p-2"
								>
									{/* <ShoppingCartIcon /> */}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6 "
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
										/>
									</svg>
									<span className="absolute top-0 right-0 text-indigo-500 ">
										{cartItems.reduce((acc, item) => acc + item.qty, 0)}
									</span>
								</Link>
								{userInfo && (
									<Popover className="relative">
										{({ open }) => (
											<Popover.Button>
												<Popover.Button
													className={classNames(
														open ? 'text-gray-900' : 'text-gray-500',
														'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
													)}
												>
													<span>{userInfo.name}</span>
													<ChevronDownIcon
														className={classNames(
															open ? 'text-gray-600' : 'text-gray-400',
															'ml-2 h-5 w-5 group-hover:text-gray-500'
														)}
														aria-hidden="true"
													/>
												</Popover.Button>

												<Transition
													show={open}
													as={Fragment}
													enter="transition ease-out duration-200"
													enterFrom="opacity-0 translate-y-1"
													enterTo="opacity-100 translate-y-0"
													leave="transition ease-in duration-150"
													leaveFrom="opacity-100 translate-y-0"
													leaveTo="opacity-0 translate-y-1"
												>
													<Popover.Panel
														static
														className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
													>
														<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
															<div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
																{resources.map((item) => (
																	<Link
																		key={item.name}
																		to={item.to}
																		className="-m-3 p-2 flex items-start rounded-lg hover:bg-gray-50"
																	>
																		<item.icon
																			className="flex-shrink-0 h-6 w-6 text-indigo-600"
																			aria-hidden="true"
																		/>
																		<div className="ml-4">
																			<p className="text-base font-medium text-gray-900">
																				{item.name}
																			</p>
																			<p className="mt-1 text-sm text-gray-500">
																				{item.description}
																			</p>
																		</div>
																	</Link>
																))}
															</div>
														</div>
													</Popover.Panel>
												</Transition>
											</Popover.Button>
										)}
									</Popover>
								)}
							</Popover.Group>
							<div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
								{!userInfo && (
									<>
										<StatusOfflineIcon className="ml-2 h-5 w-5 group-hover:text-indigo-500 text-indigo-300" />
										<Link
											to="/login"
											className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
										>
											<i className="fas fa-user"></i> Sign in
										</Link>

										<Link
											to="/register"
											className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
										>
											Sign up
										</Link>
									</>
								)}
								{userInfo && (
									<>
										<StatusOnlineIcon className="ml-2 h-5 w-5 group-hover:text-indigo-500 text-indigo-300" />
										<Link
											to="/profile"
											className=" whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
										>
											Profile{' '}
										</Link>
										<a className="ml-4" href="#!" onClick={logoutHandler}>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-6 w-6"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
												/>
											</svg>
										</a>
									</>
								)}
							</div>
						</div>
					</div>

					<Transition
						show={open}
						as={Fragment}
						enter="duration-200 ease-out"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="duration-100 ease-in"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						<Popover.Panel
							focus
							static
							className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
						>
							<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
								<div className="pt-5 pb-6 px-5">
									<div className="flex items-center justify-between">
										<div>
											<img
												className="h-8 w-auto"
												src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
												alt="Workflow"
											/>
										</div>
										<div className="-mr-2">
											<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
												<span className="sr-only">Close menu</span>
												<XIcon className="h-6 w-6" aria-hidden="true" />
											</Popover.Button>
										</div>
									</div>
									<div className="mt-6">
										<nav className="grid gap-y-8">
											{solutions.map((item) => (
												<Link
													key={item.name}
													to={item.to}
													className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
												>
													<item.icon
														className="flex-shrink-0 h-6 w-6 text-indigo-600"
														aria-hidden="true"
													/>
													<span className="ml-3 text-base font-medium text-gray-900">
														{item.name}
													</span>
												</Link>
											))}
										</nav>
									</div>
								</div>
								<div className="py-6 px-5 space-y-6">
									<div className="grid grid-cols-2 gap-y-4 gap-x-8">
										{resources.map((item) => (
											<Link
												key={item.name}
												to={item.to}
												className="text-base font-medium text-gray-900 hover:text-gray-700"
											>
												{item.name}
											</Link>
										))}
									</div>
									<div>
										{!userInfo ? (
											<>
												<Link
													to="/register"
													className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
												>
													Sign up
												</Link>
												<p className="mt-6 text-center text-base font-medium text-gray-500">
													Existing customer?{' '}
													<Link
														to="/login"
														className="text-indigo-600 hover:text-indigo-500"
													>
														Sign in
													</Link>
												</p>
											</>
										) : (
											<a href="#!" onClick={logoutHandler}>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-6 w-6"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
													/>
												</svg>
											</a>
										)}
									</div>
								</div>
							</div>
						</Popover.Panel>
					</Transition>
				</>
			)}
		</Popover>
	);
};
export default NavHeader;
