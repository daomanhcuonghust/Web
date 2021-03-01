import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getDemoAction} from '../../actions';
import {Demo} from './Demo';

export const Demos = () => {
    const demos = useSelector(state => state.demo);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDemoAction());
    }, [dispatch]);

    return ( 
        <div>
        {
            demos.map(demo => <Demo demo={demo} key={demo._id}/>)
        }
        </div>
    )
}