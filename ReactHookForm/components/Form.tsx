import {SubmitHandler, useForm} from "react-hook-form";
// validation using react hook form library
interface FormData {
    name: string;
    email: string;
    password: string ;
}
const Form = () => {

    const {register,
        handleSubmit,
        formState: { errors, isSubmitting},
    } = useForm<FormData>();

    const onSubmit : SubmitHandler<FormData> = (data) => {
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type={"text"} id={"name"}
                       placeholder={"Name"} {...register('name', {required: 'Name is required'})} />
                {errors.name && <p style={{color: "red"}}>{errors.name.message}</p>}

            </div>

            <div>
                <label htmlFor="email">Email:</label>
                <input type={"text"} id={"email"} placeholder={"Email"} {...register('email', {
                    required: 'Email is required',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                    },
                })} />
                {errors.email && <p style={{color: "red"}}>{errors.email.message}</p>}

            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <input type={"text"} id={"password"}
                       placeholder={"Password"} {...register('password',
                    {minLength :{
                        value: 8,
                            message: 'Password must be atleast 8 characters'
                        },
                    })} />
                {errors.password && <p style={{color: "red"}}>{errors.password.message}</p>}

            </div>


            <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Loading ...' : 'Submit'}</button>
        </form>
    )
};

export default Form;