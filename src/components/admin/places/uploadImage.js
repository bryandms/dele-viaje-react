import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { uploadImage } from "../../../utils/queries/place";
import {
  Button,
  Modal,
  Header,
  Image,
  Grid,
  Icon,
  Card,
  Divider,
  Dimmer,
  Loader
} from "semantic-ui-react";
import Dropzone from 'react-dropzone';

class UploadFile extends Component {

  state = {
    file: null,
    loading: false
  }

  onDrop = async ([file]) => {
    this.setState({ file });
  }

  uploadImages = async () => {
    this.loading();
    const { file } = this.state;
    const { uploadImage, alert, place: { id: placeId } } = this.props;

    uploadImage({
      variables: { file, placeId }
    }).then(res => {
      alert({
        success: "El sitio ha sido actualizado."
      });
      this.close();
    }).catch(err => {
      alert({
        danger: `El sitio no ha sido actualizado. ${
          err.graphQLErrors[0].message
        }`
      });
      this.close();
    })
  }

  loading = (flag = true) => { this.setState({ loading: flag }) };

  close = () => {
    this.loading(false);
    this.props.close();
  }

  render(){
    const { file, loading } = this.state;
    const { place, close } = this.props;
    
    return (
      <Modal id="uploadImageModal" open={true} onOpen={this.open}>
        <Header textAlign="center">Subir imagenes para {place.name}</Header>
        <Modal.Content style={{ textAlign: 'center' }}>

          {!loading ? (
            <div>
              <Dropzone
                className="dropzone-container"
                onDrop={this.onDrop}>
                <Header as='h4' icon>
                  <Icon name="upload" style={{ marginTop: '10px' }} />
                  Arrastre aquí un archivo o haga click sobre este cuadro
                </Header>
              </Dropzone>

              {file &&
              <div>
                <Divider horizontal>Preview</Divider>
                <Grid.Row className="padding-3">
                  <Card.Group>
                    <Card centered className="margin-10">
                      <Image
                        className="card-img-transition img-thumbnail"
                        src={file.preview}
                        size="medium"
                        style={{ height: "200px", width: "100%" }}
                        />
                    </Card>
                  </Card.Group>
                </Grid.Row>
              </div> 
              }

              <Grid.Row className="margin-10">
                <Button color="blue" disabled={!file || loading} onClick={this.uploadImages}>
                  Guardar
                </Button>
                <Button color="black" type="button" onClick={close}>
                  Cancelar
                </Button>
              </Grid.Row>
            </div>
          ) : (
            <Dimmer active>
              <Loader inverted active size='massive'>Loading</Loader>
            </Dimmer>
          )}
          
        </Modal.Content>
      </Modal>
    )
  }
}

export default graphql(uploadImage, { name: "uploadImage" })(UploadFile);