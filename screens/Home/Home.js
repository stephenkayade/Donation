import React, { useEffect, useState } from 'react';
import { FlatList, Image, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Tab from '../../components/Tab/Tab';
import Badge from '../../components/Badge/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Search from '../../components/Search/Search';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import { horizontalScale } from '../../assets/styles/scaling';
import { useDispatch, useSelector } from 'react-redux';
import { resetToInitialState, updateFirstName } from '../../redux/reducers/User';
import style from './style';
import { updateSelectedCategoryId } from '../../redux/reducers/Categories';
import { updateSelectedDonationId } from '../../redux/reducers/Donations';
import { Routes } from '../../navigation/Routes';

const Home = ({ navigation }) => {

    // Redux
    const user = useSelector(state => state.user);
    const categories = useSelector(state => state.categories);
    const donations = useSelector(state => state.donations);
    const dispatch = useDispatch();


    // Page state
    const [loading, setLoading] = useState(false);
    const [categoryPage, setCategoryPage] = useState(1);
    const [categoryList, setCategoryList] = useState([]);
    const [donationItems, setDonationItems] = useState([]);

    const categoryPageSize = 4;

    useEffect(() => {
        const items = donations.items.filter((value) => value.categoryIds.includes(categories.selectedCategoryId));
        setDonationItems(items);
    }, [categories.selectedCategoryId]);

    useEffect(() => {
        setLoading(true);
        const initialData = pagination(categories.categories, categoryPage, categoryPageSize);
        setCategoryList(initialData);
        setCategoryPage(prev => prev + 1);
        setLoading(false);
    }, []);


    // Pagination function
    const pagination = (data, pageNumber, pageSize) => {

        const startIndex = (pageNumber - 1) * pageSize;
        const endIndex = startIndex + pageSize;

        if (startIndex >= data.length) {
            return [];
        }

        return data.slice(startIndex, endIndex);

    };



    return (
        <SafeAreaView style={style.home}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={style.header}>
                    <View>
                        <Text style={style.headerIntroText}>Hello, </Text>
                        <View style={style.username}>
                            <Header title={`${user.firstName} ${user.lastName[0]} .👋`} />
                        </View>
                    </View>
                    <Image source={{ uri: user.profileImage }} style={style.profileImage} resizeMode="contain" />
                </View>

                <View style={style.searchBox}>
                    <Search />
                </View>

                <Pressable style={style.hightlightImageContainer}>
                    <Image source={require('../../assets/images/highlighted_image.png')} style={style.highlightImage} resizeMode="contain" />
                </Pressable>

                <View style={style.categories}>

                    <View style={style.categoryHeader}>
                        <Header title={'Select Category'} type={2} />
                    </View>

                    <View>
                        <FlatList
                            onEndReachedThreshold={0.5}
                            onEndReached={() => {
                                setLoading(true);
                                if (loading) {
                                    return;
                                }
                                let newData = pagination(categories.categories, categoryPage, categoryPageSize);
                                if (newData.length > 0) {
                                    setCategoryList(prevState => [...prevState, ...newData]);
                                    setCategoryPage(prev => prev + 1);
                                }
                                setLoading(false);

                            }}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={categoryList}
                            renderItem={({ item }) => (
                                <View style={style.categoryItem} key={item.categoryId}>
                                    <Tab
                                        tabId={item.categoryId}
                                        onPress={(value) => dispatch(updateSelectedCategoryId(value))}
                                        title={item.name}
                                        isInactive={item.categoryId !== categories.selectedCategoryId}
                                    />
                                </View>
                            )}
                        />
                    </View>

                </View>

                {
                    donationItems.length > 0 &&

                    <View style={style.donationItemContainer}>
                        {
                            donationItems.map((donation) => {

                                const categoryInfo = categories.categories.find(val => val.categoryId === categories.selectedCategoryId)

                                return (<View key={donation.donationItemId} style={style.singleDonationItem}>

                                    <SingleDonationItem
                                        onPress={(selectedId) => {
                                            dispatch(updateSelectedDonationId(selectedId))
                                            navigation.navigate(Routes.SingleDonationItem, {categoryInfo})
                                        }}
                                        donationItemId={(donation.donationItemId)}
                                        donationTitle={donation.name}
                                        uri={donation.image}
                                        price={parseFloat(donation.price)}
                                        badgeTitle={ categoryInfo.name}
                                    />
                                </View>)

                            })
                        }
                    </View>
                }

            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
