





import React, { Component } from 'react';
import { Container, Content, Thumbnail } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Col, Row, Grid } from 'react-native-easy-grid';



export default class DayView extends Component {



  render() {



      const printImages = () =>{
        let rows = [];
        let count = 0;
        pics.forEach((url)=> {
        let element =  0
         rows.push(

           <Row key={count}><Thumbnail key={count} style={{width: 300, height: 300, margin: 30}}  source={{uri: url}} /></Row>
           )
         count += 1
        })
        return rows
      }


     const pics = ['http://www.saladbarmn.com/assets/img/slider/2.jpg',
     'http://www.saladbarmn.com/assets/img/slider/1.jpg', 'http://www.saladbarmn.com/assets/img/slider/3.jpg',
     'http://www.saladbarmn.com/assets/img/slider/1.jpg', 'https://upload.wikimedia.org/wikipedia/commons/9/94/Salad_platter.jpg',
     'http://www.cicis.com/media/1235/saladbar_saladmix.png', 'http://www.cicis.com/media/1235/saladbar_saladmix.png',
     'http://www.cicis.com/media/1235/saladbar_saladmix.png', 'http://www.cicis.com/media/1235/saladbar_saladmix.png']

    return (
      <Container>
      <Content>
      <Grid>

        {printImages()}

      </Grid>
        </Content>
      </Container>

    );
  }
}




