import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Container, Content, Thumbnail, Card, CardItem, Spinner, Separator } from 'native-base';
import moment from 'moment';

const citrusYellow = '#F6E49C';
const citrusPink = '#FC8A67';
const citrusOrange = '#E88931';
const citrusGreen = '#00A229';
const periwinkle = '#686CA6'
const lightYellow = '#fbf4d7'

const styles = {
  card: {
    margin: 10
  },
  cardItem: {
    backgroundColor: lightYellow
  },
  container: {
    backgroundColor: citrusYellow,
    marginBottom: 50
  },
  thumbnail: {
    width: 300,
    height: 300,
    marginLeft: 2
  }
}

//Moment(this.state.date).format('MMMM DD YYYY')




export default function Meal (props) {

    let oldDate = ''

    const renderSeparator = (date) => {
      if (date !== oldDate){
        oldDate = date;
        return ( <View style={{backgroundColor: citrusPink}}>
                  <Text style={{textAlign: 'center', color: 'white'}}>{date}</Text>
                </View>)
      }
    }

    return (
     <Container style={styles.container}>
      <Content>
        {

        props.meals && props.meals.length ?
        props.meals.map((meal, i) => {
          let date = meal.created_at.slice(0,10)
          date = moment(date).format('MMM DD YYYY')

            return (
              <View key={i}>
              {renderSeparator(date)
              }
              <Card style={styles.card} >
                <CardItem bordered style={styles.cardItem}>
                  <TouchableOpacity onPress={() => props.handleMealClick(meal)}>
                    <Thumbnail style={styles.thumbnail}  source={{uri: meal.photoUrl}} />
                  </TouchableOpacity>
                 </CardItem>
               </Card>
                </View>
              )
          }) :
        <Spinner color={citrusPink} />
      }
      </Content>
      </Container>
    )
  }

