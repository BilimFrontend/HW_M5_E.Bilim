import React, {useState} from 'react';
import {Button, Container, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {addPokemonAction} from "../../redux/actions";
import Spinner from "react-bootstrap/Spinner";
import classes from "./CreatePokemonPage.module.css";

const CreatPokemonPage = () => {


    const {preloader} = useSelector(state => state.preloaderReducer)
    const dispatch = useDispatch()

    const [pokemon, setPokemon] = useState({
        name: '',
        ability: '',
        rarity: ''
    })

    const formValue = (event) => {
        setPokemon({...pokemon, [event.target.name]: event.target.value})
    }

    const addPokemon= (event) => {
        event.preventDefault()
        dispatch(addPokemonAction(pokemon))
        if (pokemon.name === '' || pokemon.ability === '' || pokemon.rarity === '') {
            alert('Заполните поля')
        }
    }

    return (
        <div className={classes.form}>
            <Container>
                {preloader
                    ?
                    <Spinner animation='border' role='status' />
                    :
                    <Form onSubmit={addPokemon}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Pokemon Name</Form.Label>
                            <Form.Control type="text" placeholder="Pokemon name" name={'name'} onChange={formValue}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="ability">
                            <Form.Label>Pokemon Ability</Form.Label>
                            <Form.Control type="text" placeholder="ability" name={'ability'} onChange={formValue}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="rarity">
                            <Form.Label>Rarity Pokemon</Form.Label>
                            <Form.Control type="number" placeholder="pokemon rarity" name={'rarity'} onChange={formValue}/>
                        </Form.Group>
                        <Button variant="primary" type="submit"  className='btn btn-dark'>
                            Create Pokemon
                        </Button>
                    </Form>
                }
            </Container>
        </div>
    );
};

export default CreatPokemonPage;