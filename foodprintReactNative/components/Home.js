import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, Content, Thumbnail, Card, CardItem, Spinner } from 'native-base';

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

export default function Meal (props) {
    return (
     <Container style={styles.container}>
      <Content>
        {
        props.meals && props.meals.length ?
        props.meals.map((meal, i) => {
            return (
              <Card style={styles.card} key={i}>
                <CardItem bordered style={styles.cardItem}>
                  <TouchableOpacity onPress={() => props.handleMealClick(meal)}>
                    <Thumbnail style={styles.thumbnail}  source={{uri: meal.photoUrl}} />
                  </TouchableOpacity>
                 </CardItem>
               </Card>
              )
          }) :
        <Spinner color={citrusPink} />
      }
      </Content>
      </Container>
    )
  }

