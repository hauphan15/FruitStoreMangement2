import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BarChartIcon from '@mui/icons-material/BarChart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CollectionsIcon from '@mui/icons-material/Collections';
import SettingsIcon from '@mui/icons-material/Settings';

function ComponentLeftBar() {
    return (
        <div>
            <div className="text-3xl flex flex-col">
                <div>
                    <NavigateBeforeIcon fontSize='large' />
                </div>
                <div className="flex flex-col mt-40">
                    <div className='rounded-full h-12 w-12 text-center hover:text-white hover:bg-blue-600'>
                        <AccountCircleIcon fontSize='medium' />
                    </div>
                    <div className='mt-10 rounded-full h-12 w-12 text-center hover:text-white hover:bg-blue-600'>
                        <BarChartIcon fontSize='medium' />
                    </div>
                    <div className='mt-10 rounded-full h-12 w-12 text-center hover:text-white hover:bg-blue-600'>
                        <FlashOnIcon fontSize='medium' />
                    </div>
                    <div className='mt-10 rounded-full h-12 w-12 text-center text-white bg-blue-600'>
                        <MenuBookIcon fontSize='medium' />
                    </div>
                    <div className='mt-10 rounded-full h-12 w-12 text-center hover:text-white hover:bg-blue-600'>
                        <CollectionsIcon fontSize='medium' />
                    </div>
                    <div className='mt-10 rounded-full h-12 w-12 text-center hover:text-white hover:bg-blue-600'>
                        <SettingsIcon fontSize='medium' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComponentLeftBar;