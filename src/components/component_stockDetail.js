import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';

function StockDetail(props) {

    const handleCloseDetail = () => {
      props.handleCloseDetail();
    }

    return (
      <div className="h-128 w-96 bg-white rounded-lg z-10 shadow-2xl relative">
        <div className="rounded-full w-10 h-10 absolute top-5 right-5 text-center bg-gray-100 hover:cursor-pointer hover:bg-blue-500 hover:text-white" onClick={() => handleCloseDetail()}>
          <CloseIcon className="mt-2 p-0.5" />
        </div>
        <div className='p-8'>
          <div className="font-bold text-xl flex">Apple</div>
          <div className='flex justify-between'>
            <div className='flex justify-between mt-5'>
              <div className='font-bold text-blue-500 mr-4'>A1</div>
              <div className='font-bold text-gray-400'>ID: A001</div>
            </div>
            <div>
              <img className="w-20 h-20" src="https://static.libertyprim.com/files/familles/pomme-large.jpg?1569271834" alt="" />
            </div>
          </div>
          <div className='font-bold'>$14.6</div>
          <div className='flex border-2 rounded-2xl mt-4 h-12 justify-center items-center font-bold'>
              <div className='mr-1.5 border-4 border-green-500 rounded-full'></div>
              <div>192</div>
          </div>
          <div className='flex font-semibold justify-between mt-6 text-gray-500'>
            <div>On shelf:</div>
            <div>Inventory:</div>
          </div>
          <div className='flex font-bold justify-between'>
            <div className='text-blue-500'>25/30 items</div>
            <div>196 items</div>
          </div>
          <div className='flex bg-gray-400 h-2 mt-2 rounded-lg'>
            <div className='w-3/4 bg-blue-500 rounded-lg'></div>
          </div>
          <div className='flex font-bold mt-5'>
            <div className='text-gray-500'>Sales:</div>
            <div className='ml-3'>3213</div>
            <div className='text-green-500 ml-3'>9%</div>
            <div className="w-0 h-0 border-l-4 border-r-4 border-b-4 border-b-green-500 border-solid border-r-transparent border-l-transparent mt-2.5 ml-2"></div>
          </div>
          <div className='flex mt-10 rounded-full border font-bold text-xl justify-center bg-gray-100 h-14 items-center hover:cursor-pointer hover:bg-blue-500 hover:text-white'>
            <div className='mr-3 mb-1'>
              <VisibilityIcon/>
            </div>
            <div>
              View detail
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default StockDetail;