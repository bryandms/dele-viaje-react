import React from "react";
import { graphql } from "react-apollo";
import $ from "jquery";
import { Link } from "react-router-dom";
import {
  Button,
  Divider,
  Form,
  Grid,
  Header,
  Icon,
  Container
} from "semantic-ui-react";

import queries from "../../utils/queries";
import { provinces, accessibilities, categories } from "../../utils/selects";
import Nav from "../partials/nav";
import SearchResult from "../home/searchResult";
import isAuth from "../../utils/isAuth";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      args: {},
      errors: [],
      places: [],
      price: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(element) {
    const targetTop = $(element).offset().top - 70;
    $("body,html").animate({ scrollTop: targetTop }, 500);
  }

  handleSubmit = async (event, args) => {
    event.preventDefault();
    await this.props.findPlaces.refetch(args);
    const places = await this.props.findPlaces;
    this.setState({ places: places.findPlaces });
    this.handleScroll("#result");
  };

  handleChange = (event, input) => {
    event.preventDefault();
    const args = this.state.args;
    if (input.name === "price") {
      if (input.value === "") input.value = 0;
      this.setState({ price: input.value });
    }
    args[input.name] = input.value;
    this.setState({ args });
  };

  render() {
    const { args, places } = this.state;

    return (
      <div className="full">
        <Grid className="form-background">
          <Nav />
          <Grid.Row centered>
            <Grid.Column mobile={12} tablet={8} computer={6}>
              <Form onSubmit={event => this.handleSubmit(event, args)}>
                <Header textAlign="center" as="h1" inverted color="grey">
                  Dele Viaje
                </Header>
                <p className="text-light">
                  Encuentre sitios similares a lo que anda buscando. Complete
                  los criterios de su búsqueda.
                </p>

                <Form.Field>
                  <Form.Select
                    onChange={this.handleChange}
                    name="province"
                    fluid
                    options={provinces}
                    placeholder="Provincia"
                  />
                </Form.Field>

                <Form.Field>
                  <Form.Select
                    onChange={this.handleChange}
                    name="accessibility"
                    fluid
                    options={accessibilities}
                    placeholder="Accesibilidad"
                  />
                </Form.Field>

                <Form.Field>
                  <Form.Select
                    onChange={this.handleChange}
                    name="category"
                    fluid
                    options={categories}
                    placeholder="category"
                  />
                </Form.Field>

                <Form.Field>
                  <Form.Input
                    onChange={this.handleChange}
                    name="price"
                    type="number"
                    max={100000}
                    min={0}
                    step={1000}
                    placeholder="Precio"
                  />
                </Form.Field>

                <Grid padded={true} centered>
                  <Grid.Row>
                    <Button type="submit" primary>
                      Buscar
                    </Button>
                  </Grid.Row>

                  <Grid.Row>
                    <Divider horizontal>
                      <Icon name="paper plane" color="grey" />
                    </Divider>
                    {isAuth() ? (
                      <label className="text-light">Cuenta Premium</label>
                    ) : (
                      <label className="text-light">
                        Pásate a <Link to="/register">Premium</Link>
                      </label>
                    )}
                  </Grid.Row>
                </Grid>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Grid>
          <Container>
            <div id="result">
              {places.length ? (
                <SearchResult places={places} user={this.props.user.user} />
              ) : null}
            </div>
          </Container>
        </Grid>
      </div>
    );
  }
}

export default graphql(queries.query.findPlaces, { name: "findPlaces" })(Home);
