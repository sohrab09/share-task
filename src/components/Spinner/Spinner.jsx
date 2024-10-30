import { Watch } from 'react-loader-spinner';

const Spinner = () => {
    return (
        <Watch
            visible={true}
            height="160"
            width="160"
            radius="48"
            color="#4fa94d"
            ariaLabel="watch-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
    )
}

export default Spinner