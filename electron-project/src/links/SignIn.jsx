import "../App.css";

export default function SingIn() {
  return (
    <div>
      <h1 className="signUpTitle"> Sing up</h1>
      <div className="signUpForm">
        <label htmlFor="firstname"> First Name </label>
        <input type="firstName" placeholder="Enter your first name" />
        <label htmlFor="firstname"> Last Name </label>
        <input type="firstName" placeholder="Enter your last name" />
        <label htmlFor="firstname"> Age </label>
        <input type="firstName" placeholder="Enter your age" />
        {/* <label type="gender"> Gender </label> */}
        <div>
          <input type="radio" value="Male" name="gender" /> Male
          <input type="radio" value="Female" name="gender" /> Female
        </div>
        <label htmlFor="email"> Email </label>
        <input type="email" name="" id="" placeholder="Enter your email" />
        <label htmlFor="password"> Password </label>
        <input type="password" placeholder="Create a password" />
        <p> Must be at least 8 characters </p>
        <button> Create account</button>
        <p>
          Already have an account? <a href="#"> Log in </a>
        </p>
      </div>
    </div>
  );
}
