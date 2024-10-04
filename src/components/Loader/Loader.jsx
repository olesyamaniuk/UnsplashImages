import { MagnifyingGlass } from 'react-loader-spinner'
import css from "./Loader.module.css"

export default function Loader() {
    return (
        <div className={css.loader}>
            <MagnifyingGlass 
                visible={true}
                height="80"
                width="80"
                ariaLabel="magnifying-glass-loading"
                wrapperStyle={{}}
                wrapperClass="magnifying-glass-wrapper"
                glassColor="#fff"
                color="#f77307"
            />
        </div>
    );
}