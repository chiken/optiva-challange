import { useSelector, useDispatch } from 'react-redux'
import { useSearchParams } from "react-router-dom"

import { MovieState } from '../types'
import { setSearchQuery } from '../redux/actions/movieActions'

export const SearchInputComponent = () => {
    const dispatch = useDispatch();
    const query = useSelector((state: MovieState) => state.query);
    const [searchParams, setSearchParams] = useSearchParams();

    let timeout: any = null;
    const handleDebounce = (event: any) => {        
        if(query !== event.target.value){
            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(() => {
                searchParams.delete('q')
                setSearchParams({q: event.target.value})
                dispatch(setSearchQuery(event.target.value));
            }, 500);
        }
    }
    
    return (
        <div className="form-inline px-5">
            <input className="form-control" type="search" placeholder={query.length > 0 ? query : 'Search'  } aria-label="Search" onChange={handleDebounce} onKeyDown={handleDebounce} />
        </div> 
    )
}