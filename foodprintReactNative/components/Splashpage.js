import React, { Component } from 'react';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import { whoami } from '../reducers/authThunks'
import { Container, Content, Button } from 'native-base';
import {Text, Image} from 'react-native';
import { getAllMealsFromDB } from '../reducers/mealThunks';


const styles = {
  container: {
    backgroundColor: '#f6e49c',
    flex: 1,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  headline: {
    marginTop: 50,
    //marginLeft: 90,
    color: '#505050',
    fontSize: 25,
    fontFamily: 'SpaceMono-Bold',
    textAlign: 'center'
  },
  body: {
    marginTop: 60,
    marginLeft: 65,
    marginRight: 40,
    color: '#505050',
    fontFamily: 'SpaceMono-Bold',
    textAlign: 'center'
  },
  button: {
    marginTop: 85,
    marginRight: 40,
    marginLeft: 40
  },
  logo: {
    width: 150,
    height: 150,
    marginTop: 20,
    marginLeft: 90
  }
};


export class Splashpage extends Component {
  constructor(props){
    super(props);
    this.determineNextPath = this.determineNextPath.bind(this);
  }

    componentDidMount() {
        this.props.whoami();
    }

    determineNextPath() {
        console.log('this button was pressed', this.props.auth)
        if (this.props.auth === null || this.props.auth === "") {
          console.log('in the if statement! Bro what wrong?');
          Actions.login();
        } else {
          console.log('in the else statement! Where are you going?')
            Actions.home({duration})
        }
    }

    render() {
        return (
            <Container style={styles.container}>
              <Content>
                <Image style={styles.logo} source={require('../img/FoodPrint.png')}/>
                <Text style={styles.headline}>
                  Eat Smarter
                </Text>
                <Text style={styles.body}>
                  A smart food journal to catalog and track all of your meals
                </Text>
                <Button light block style={styles.button} onPress={() => {
                  if (this.props.auth === null || this.props.auth === "") {
                    Actions.login();
                } else {
                    console.log('in the else statement!');
                      this.props.getAllMealsFromDB();
                    Actions.home()
                }
                }}>
                  <Text>Track Now
                  </Text>
                </Button>
              </Content>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
};

const mapDispatchToProps = dispatch => {
    return {
        whoami() {
            dispatch(whoami())
        },
        getAllMealsFromDB() {
            dispatch(getAllMealsFromDB())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Splashpage)
