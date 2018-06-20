import React from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import {
  Button,
  Divider,
  Form,
  Grid,
  Header,
  Icon,
  Message
} from "semantic-ui-react";

import queries from "../../utils/queries";
import Nav from "../partials/nav";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      args: {},
      errors: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = async (event, args) => {
    event.preventDefault();
    const response = await this.props.login({
      variables: args
    });

    const { errors, success, token, user } = response.data.login;

    if (!success) {
      this.setState({ errors });
    } else {
      localStorage.setItem("token", token);
      this.props.history.push("/");
    }
  };

  handleChange = (event, input) => {
    event.preventDefault();
    const args = this.state.args;
    args[input.name] = input.value;
    this.setState({ args });
  };

  render() {
    const { args, errors } = this.state;

    return (
      <Grid className="form-background">
        <Nav />
        <Grid.Row centered>
          <Grid.Column mobile={12} tablet={8} computer={6}>
            <Form onSubmit={event => this.handleSubmit(event, args)}>
              <Header textAlign="center" as="h1" inverted color="grey">
                Inicio de sesión
              </Header>

              <Form.Field>
                <Form.Input
                  onChange={this.handleChange}
                  name="email"
                  type="email"
                  placeholder="Correo"
                />
              </Form.Field>

              <Form.Field>
                <Form.Input
                  onChange={this.handleChange}
                  name="password"
                  type="password"
                  placeholder="Contraseña"
                />
              </Form.Field>

              <Grid padded={true} centered>
                <Grid.Row>
                  <Button
                    type="submit"
                    disabled={!args.email || !args.password}
                    primary
                  >
                    Iniciar
                  </Button>
                </Grid.Row>

                {errors.length ? (
                  <Grid.Row>
                    <Message
                      negative
                      header="Revise los siguientes errores:"
                      list={errors.map(error => `${error.message}`)}
                    />
                  </Grid.Row>
                ) : null}

                <Grid.Row>
                  <Divider horizontal>
                    <Icon name="paper plane" color="grey" />
                  </Divider>
                  <label className="text-light">
                    ¿No tienes una cuenta?{" "}
                    <Link to="/register">Regístrate</Link>
                  </label>
                </Grid.Row>
              </Grid>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default graphql(queries.mutation.login, { name: "login" })(Login);
