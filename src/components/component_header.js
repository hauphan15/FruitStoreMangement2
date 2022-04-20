import NearMeIcon from '@mui/icons-material/NearMe';
import TextRotationDownIcon from '@mui/icons-material/TextRotationDown';
import TextureIcon from '@mui/icons-material/Texture';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import SearchIcon from '@mui/icons-material/Search';
import RestoreIcon from '@mui/icons-material/Restore';

function ComponentHeader() {
    return (
        <div>
            <div className="flex">
                <div className="flex w-2/3">
                    <div className=''>
                        <p className='font-bold text-xl'>Product Management</p>
                        <p className='text-zinc-400 font-medium'>125 product - 12.241 items</p>
                    </div>
                    <div className='rounded-full bg-gray-200 w-12 h-12 text-center align-middle ml-5 p-1'>
                        <ZoomOutMapIcon className='mt-2 text-gray-500' />
                    </div>
                    <div className='rounded-full bg-white w-12 h-12 text-center align-middle ml-3 p-1'>
                        <NearMeIcon className='mt-2' />
                    </div>
                    <div className='rounded-full bg-white w-12 h-12 text-center align-middle ml-3 p-1'>
                        <TextureIcon className='mt-2' />
                    </div>
                    <div className='rounded-full bg-gray-200 w-12 h-12 text-center align-middle ml-3 p-1'>
                        <TextRotationDownIcon className='mt-2 text-gray-500'/>
                    </div>
                    <div className='rounded-full bg-white w-12 h-12 text-center align-middle ml-3 p-1'>
                        <BubbleChartIcon className='mt-2' />
                    </div>
                </div>
                <div className="flex justify-between w-1/3 px-7">
                    <div className='flex h-12'>
                        <div className='rounded-3xl bg-gray-200 font-bold text-base'>
                            <p className='mt-2.5 px-7'>View list</p>
                        </div>
                    </div>
                    <div className='flex h-12'>
                        <div className='rounded-full bg-gray-200 mr-3 p-3'>
                            <RestoreIcon className='mb-1'/>
                        </div>
                        <div className='rounded-full bg-gray-200 mr-3 p-3'>
                            <SearchIcon className='mb-1'/>
                        </div>
                        <div className='rounded-3xl bg-blue-600 font-bold text-base'>
                            <p className='mt-2.5 px-7 text-white'>Create</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComponentHeader;