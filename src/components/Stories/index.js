import React from 'react';
import { View, FlatList } from 'react-native';
import Story from '../Story';
import styles from './styles'

const data=[
    {
        imageUri:'https://www.incredible-web.com/media/7358/pic.jpg',
        name: 'Sam'
    },
    {
        imageUri:'https://scontent.fmla1-1.fna.fbcdn.net/v/t1.0-9/12495112_1739133472976297_4876613685693566210_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=GWPNfTjyQFcAX8UPw0f&_nc_ht=scontent.fmla1-1.fna&oh=dd734982c00673212c2420bf73abb9c6&oe=5FBEAC12',
        name: 'Sumit'
    },
    {
        imageUri:'https://scontent.fmla1-1.fna.fbcdn.net/v/t1.0-9/109768497_1402998919894988_3560475652108464117_o.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=377h6JjYOjsAX-tIlme&_nc_ht=scontent.fmla1-1.fna&oh=3abdc3229b4f46dfdcdde6152ddd3892&oe=5FBD30BD',
        name: 'Ajit'
    },
    {
        imageUri:'https://scontent.fmla1-2.fna.fbcdn.net/v/t1.0-9/119117889_2715215738718698_5016060338353691134_n.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=EMWkB5Qf5DcAX980PFU&_nc_ht=scontent.fmla1-2.fna&oh=3d4d947d962ac3d08d82f71b14ea80c1&oe=5FBE220C',
        name: 'Seenu'
    },
    {
        imageUri:'https://scontent.fmla1-1.fna.fbcdn.net/v/t1.0-9/37194417_2362889863937850_8705472287458983936_n.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=Y0prNOnjjYwAX-esp6z&_nc_ht=scontent.fmla1-1.fna&oh=def20ee042c69bd668ae9451ea61b315&oe=5FBDC25A',
        name: 'Pradeep'
    },
    {
        imageUri:'https://scontent.fmla1-1.fna.fbcdn.net/v/t1.0-9/12495112_1739133472976297_4876613685693566210_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=GWPNfTjyQFcAX8UPw0f&_nc_ht=scontent.fmla1-1.fna&oh=dd734982c00673212c2420bf73abb9c6&oe=5FBEAC12',
        name: 'Suwerwmit'
    },
    {
        imageUri:'https://scontent.fmla1-1.fna.fbcdn.net/v/t1.0-9/109768497_1402998919894988_3560475652108464117_o.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=377h6JjYOjsAX-tIlme&_nc_ht=scontent.fmla1-1.fna&oh=3abdc3229b4f46dfdcdde6152ddd3892&oe=5FBD30BD',
        name: 'Ajwerit'
    },
    {
        imageUri:'https://scontent.fmla1-2.fna.fbcdn.net/v/t1.0-9/119117889_2715215738718698_5016060338353691134_n.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=EMWkB5Qf5DcAX980PFU&_nc_ht=scontent.fmla1-2.fna&oh=3d4d947d962ac3d08d82f71b14ea80c1&oe=5FBE220C',
        name: 'Seeewrwnu'
    }
]

const Stories =() =>(
    <FlatList 
    data={data}
    keyExtractor={({name}) => name}
    horizontal
    showsHorizontalScrollIndicator = {false}
    style={styles.container}
    renderItem={({item}) => <Story imageUri={item.imageUri} name={item.name}/>}/>
)

export default Stories;