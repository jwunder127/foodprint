import React, { Component } from 'react';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import { whoami } from '../reducers/authThunks'
import { Container, Content, Button } from 'native-base';
import {Text, Image, Dimensions} from 'react-native';
import { getAllMealsFromDB } from '../reducers/mealThunks';
import {vw, vh} from '../util';


const styles = {
    container: {
        backgroundColor: '#f6e49c',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'

    },
    headline: {
        marginTop: vh(5),
        color: '#505050',
        fontSize: 25,
        fontFamily: 'SpaceMono-Bold',
        textAlign: 'center'
    },
    body: {
        marginTop: vh(5),
        marginLeft: vw(15),
        marginRight: vw(20),
        color: '#505050',
        fontFamily: 'SpaceMono-Bold',
        textAlign: 'center'
    },
    button: {
        marginTop: vh(15),
        marginRight: vw(7),
        marginLeft: vw(7)
    },
    logo: {
        width: 150,
        height: 150,
        marginTop: vh(5),
        marginLeft: vw(30)
    }
};


export class Splashpage extends Component {
  constructor(props){
    super(props);
  }

    componentDidMount() {
        this.props.whoami();
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
