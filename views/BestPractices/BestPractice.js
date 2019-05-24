




import React from 'react';

export default class SignUp extends React.Component{
    state = {
        step1:{
            name: '',
            email: '',
            password: '',
        },
        step2:{
         location: '',
         zip: '',
        },
        step3:{
         interests: []
        },
        currentStep: 0,
        dropdownOpen: false, 
}
    onSubmit = () =>{
        let creds = this.state[this.state.currentStep];
        console.log(creds)
        this.setState({
           currentStep: this.state.currentStep + 1
        })
        
    }

    render(){
        return(
            <div>Hello {this.state.currentStep}</div>
            // put your form here pass in this.onSubmit as a prop 
            // give your form onSubmit the function you just passed in props
        )
    }
}






<Form className="form" onSubmit={this.signup}>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    onChange={this.handleChanges}
                    value={this.state.credentials.name}
                    />
                </FormGroup>
                {/* <FormGroup>
                    <Label for="last-name">Last Name</Label>
                    <Input
                    type="text"
                    name="last-name"
                    placeholder="Enter Your Last Name"
                    onChange={this.handleChanges}
                    value={this.state.credentials.last_name}
                    />
                </FormGroup> */}
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                    type="text"
                    name="email"     
                    placeholder="Enter Your Email Address"
                    onChange={()=>this.setState({credentials:email})}
                    value={this.state.credentials.email}
                    />


                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                    type="text"
                    name="password"
                    placeholder="Create Password"
                    onChange={this.handleChanges}
                    value={this.state.credentials.password}
                    />
                </FormGroup>
                    <Button className="button-style">Sign Up</Button>
                </Form>
                <h6>or</h6>
                </div>
                <div className="signup-buttons">
                    <Button color="primary">Sign In With Facebook</Button>
                    <Button>Sign In With Gmail</Button>
                    <h6>Already have an account?</h6>
                    {/* <Button onClick={this.changeStep()}>Sign In</Button> */}
                    <Button>Sign In </Button>
                </div>