import React from 'react';
import {FlatList} from 'react-native';
import Post from '../Post'
import Stories from '../Stories'

const data = [
    {
        user: {
            imageUri:'https://www.incredible-web.com/media/7358/pic.jpg',
            name: 'Sam'
        },
        imageUri: 'https://i.pinimg.com/originals/3d/16/31/3d1631814977a6f2b8505d5ee6c33cb4.jpg',
        caption: 'Bible verse of the day',
        likesCount: 1234,
        postedAt: '6 mintues ago'
    },
    {
        user:  {
            imageUri:'https://scontent.fmla1-1.fna.fbcdn.net/v/t1.0-9/109768497_1402998919894988_3560475652108464117_o.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=377h6JjYOjsAX-tIlme&_nc_ht=scontent.fmla1-1.fna&oh=3abdc3229b4f46dfdcdde6152ddd3892&oe=5FBD30BD',
            name: 'Ajit'
        },
        imageUri: 'https://i.pinimg.com/736x/0f/0f/c4/0f0fc4560579c462fdee92b5adeef5fd.jpg',
        caption: 'Bible verse of the day',
        likesCount: 1234,
        postedAt: '6 mintues ago'
    },
    {
        user: {
            imageUri:'https://scontent.fmla1-2.fna.fbcdn.net/v/t1.0-9/119117889_2715215738718698_5016060338353691134_n.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=EMWkB5Qf5DcAX980PFU&_nc_ht=scontent.fmla1-2.fna&oh=3d4d947d962ac3d08d82f71b14ea80c1&oe=5FBE220C',
            name: 'Seeewrwnu'
        },
        imageUri: 'https://storage.googleapis.com/faithpot/2020/08/bible-verses-about-trusting-god-1.jpg',
        caption: 'Bible verse of the day',
        likesCount: 1234,
        postedAt: '6 mintues ago'
    }
]

const Feed = () => (
    <FlatList 
    data={data}
    keyExtractor={({user}) => user.name}
    renderItem={({item}) => <Post post={item}/>}
    ListHeaderComponent={Stories}
    />
)

export default Feed;

