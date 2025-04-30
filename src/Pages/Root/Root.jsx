import Header from '../../Compoenet/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../../Compoenet/Footer/Footer';
import TitleManager from '../../TitleManager/TitleManager';

const Root = () => {

    

    return (
        <div>
            <TitleManager></TitleManager>
            <div className='2xl:container mx-auto sticky top-4 inset-x-0 z-20'>
                <Header/>
            </div>
            <div className='mx-auto max-w-screen-2xl sm:px-6 md:px-6 lg:px-8 xl:px-6 px-4'>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;