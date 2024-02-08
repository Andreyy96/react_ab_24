import {useForm} from "react-hook-form";

import {userService} from "../../../services/userService";
import css from "./UserForm.module.css"

const UserForm = () => {
    const {register, reset, handleSubmit, formState: {isValid}} = useForm();


    const createUser =  (user) => {
        userService.postUser(user).then(({data}) => console.log(data))
        reset()
    }

    return (
        <div >
            <form className={css.user_form} onSubmit={handleSubmit(createUser)}>
                <label htmlFor={'firstname'}>name:</label>
                <input  name="firstname" type="text" {...register('firstname')}/>

                <label htmlFor="username">username:</label>
                <input  name="username" type="text" {...register('username')}/>

                <label htmlFor="email">email:</label>
                <input  name="email" type="email" {...register('email')}/>

                <label htmlFor="street">street:</label>
                <input  name="street" type="text" {...register('address.street')}/>

                <label htmlFor="suite">suite:</label>
                <input  name="suite" type="text" {...register('address.suite')}/>

                <label htmlFor="city">city:</label>
                <input  name="city" type="text" {...register('address.city')}/>

                <label htmlFor="zipcode">zipcode:</label>
                <input  name="zipcode" type="text" {...register('address.zipcode')}/>

                <label htmlFor="lat">lat:</label>
                <input  name="lat" type="text" {...register('address.geo.lat', {valueAsNumber:true})}/>

                <label htmlFor="lng">lng:</label>
                <input  name="lng" type="text" {...register('address.geo.lng', {valueAsNumber:true})}/>

                <label htmlFor="phone">phone:</label>
                <input  name="phone" type="text" {...register('phone')}/>

                <label htmlFor="website">website:</label>
                <input  name="website" type="text" {...register('website')}/>

                <label htmlFor="companyname">Company Name:</label>
                <input  name="companyname" type="text" {...register('company.name')}/>

                <label htmlFor="catchPhrase">catchPhrase:</label>
                <input  name="catchPhrase" type="text" {...register('company.catchPhrase')}/>

                <label htmlFor="bs">Bs:</label>
                <input  name="bs" type="text" {...register('company.bs')}/>


                <button disabled={!isValid}>Save</button>
            </form>
        </div>
    );
};

export {UserForm};
