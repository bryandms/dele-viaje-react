import React, { Component } from 'react'
import { PhotoSwipeGallery } from 'react-photoswipe-component'
import Slider from 'react-slick'
import { Button, Image } from 'semantic-ui-react'

import { getMeta } from '../../helpers/image'

class PlaceGallery extends Component {
  render() {
    let photos = ['https://discountseries.com/wp-content/uploads/2017/09/default.jpg']

    if (this.props.photos) {
      const values = Object.values(this.props.photos)

      if (values.length) photos = values
    }

    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      responsive: [
        {
          breakpoint: 932,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 722,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    }

    const photoItems = photos.map(photo => {
      const { w, h } = getMeta(photo)

      return {
        src: photo,
        w,
        h
      }
    })

    const displayPhotos = photos.map((photo, i) =>
      <div
        className='slick-item'
        key={i}
      >
        <Image
          fluid
          src={photo}
        />
      </div>
    )

    return (
      <React.Fragment>
      {
        this.props.photos ?
          (
            <PhotoSwipeGallery items={photoItems}>
              <Slider {...settings}>
                { displayPhotos }
              </Slider>

              <Button
                className='rounded-0'
                fluid
                secondary
                content='Ver más fotos'
                icon='camera'
              />
            </PhotoSwipeGallery>
          ) : null
      }
      </React.Fragment>
    )
  }
}

export default PlaceGallery
