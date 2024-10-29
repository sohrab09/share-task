import SearchForm from '../../components/SearchForm/SearchForm'
import MainLayout from '../../layouts/MainLayout/MainLayout'

const Home = () => {
    return (
        <div className='mx-auto mt-20'>
            <SearchForm />
            <MainLayout />
        </div>
    )
}

export default Home