import {gql} from '@apollo/client'

export const GET_ALL_CATS = gql`
    query {
        getAllCats {
            name
            id
        }
    }

`