import {useNavigate} from "react-router-dom";

import css from './UserDetails.module.css'

const UserDetails = ({userDetails}) => {
    const {
        id, name, username, email, address: {street, suite, city, zipcode, geo: {lat, lng}},
        phone, website, company: {name: companyName, catchPhrase, bs}} = userDetails

    const navigate = useNavigate()


    return (
        <div className={css.wrapper}>
            <div className={css.details}>
                <p className={css.marginLeft}>id: {id}</p>
                <p className={css.marginLeft}>name: {name}</p>
                <p className={css.marginLeft}>username {username}</p>
                <p className={css.marginLeft}>email: {email}</p>
                <p className={css.marginLeft}>address:</p>
                <p className={css.elementObject}>street {street}</p>
                <p className={css.elementObject}>suite {suite}</p>
                <p className={css.elementObject}>city: {city}</p>
                <p className={css.elementObject}>zipcode: {zipcode}</p>
                <p className={css.elementObject}>geo: (lat: {lat} lng: {lng})</p>
                <p className={css.marginLeft}>phone: {phone}</p>
                <p className={css.marginLeft}>website: {website}</p>
                <p className={css.marginLeft}>Company:</p>
                <p className={css.elementObject}>name: {companyName}</p>
                <p className={css.elementObject}>catchPhrase: {catchPhrase}</p>
                <p className={css.elementObject}>bs: {bs}</p>
                <button onClick={() => navigate('posts', {state: {id}})}>post of current user</button>
            </div>
        </div>
    )
}
export {UserDetails};
