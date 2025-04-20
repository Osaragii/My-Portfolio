import 'boxicons/css/boxicons.min.css';

const Header = () => {
  return (
    <header data-aos="fade-down" data-aos-easing="linear" className='z-10 flex justify-between mb-24 pt-10 items-center' >
        <div className="lg:text-5xl font-extrabold text-2xl">
            DEVASHISH UMESH DALAI
        </div>

        <div className='flex gap-5'>
            <a className='text-2xl hover:text-gray500 duration-300' href=""><i class='bx bxl-twitter'></i></a>
            <a className='text-2xl hover:text-gray500 duration-300' href=""><i class='bx bxl-instagram' ></i></a>
            <a className='text-2xl hover:text-gray500 duration-300' href=""><i class='bx bxl-github' ></i></a>
            <a className='text-2xl hover:text-gray500 duration-300' href=""><i class='bx bxl-linkedin' ></i></a>
        </div>
    </header>
  );
};

export default Header;