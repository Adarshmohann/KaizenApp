import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import AppLayout from '../../../layouts/AppLayout';
import { lightColor } from '../../../theme/colors';
import AppHeader from '../../../components/AppHeader';
import SearchBar from '../../../components/SearchBar';
import CustomButton from '../../../components/CustomButton';
import MessagePageStyles from './styles';
import { Message } from '../../../types/models';
import { useNavigation } from '@react-navigation/native';

const MessagePage = () => {
    const styles = MessagePageStyles();
    const navigation = useNavigation<any>();

    const todayStr = new Date().toISOString().split('T')[0];

    const messages: Message[] = [
        {
            id: '1',
            name: "Premium Credit Solutions",
            message: "Payment confirmed! Your receipt will arrive in your email shortly.",
            time: "2hr ago",
            status: "#4CAF50",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=200&auto=format&fit=crop",
            date: todayStr,
        },
        {
            id: '2',
            name: "Standard Payment Services",
            message: "We got your request. It's under review and you'll be notified once approved.",
            time: "2day ago",
            status: "#FFAB40",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=200&auto=format&fit=crop",
            date: todayStr,
        },
        {
            id: '3',
            name: "Basic Financial Support",
            message: "Payment recorded successfully. A confirmation email and SMS are on the way.",
            time: "2day ago",
            status: "#BBB",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=200&auto=format&fit=crop",
            date: todayStr,
        },
        {
            id: '4',
            name: "Nova Finance Group",
            message: "Your payment went through! We've sent a...",
            time: "3day ago",
            status: "#4CAF50",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=200&auto=format&fit=crop",
            date: "2024-10-12",
        }
    ];

    const formatDate = (dateStr: string): string => {
        if (dateStr === todayStr) return "Today";
        const [year, month, day] = dateStr.split('-');
        return `${day}/${month}/${year.slice(-2)}`;
    };

    const renderMessageCard = ({ item, index }: { item: Message, index: number }) => {
        const showDateSeparator = index === 0 || messages[index - 1].date !== item.date;
        const displayDate = formatDate(item.date);

        return (
            <View key={item.id}>
                {showDateSeparator && (
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>{displayDate}</Text>
                        {displayDate === "Today" && (
                            <Text style={styles.sectionDate}>
                                {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' })}
                            </Text>
                        )}
                    </View>
                )}
                <TouchableOpacity style={styles.messageCard} activeOpacity={0.8}>
                    <View style={styles.avatarContainer}>
                        <Image source={{ uri: item.image }} style={styles.avatar} />
                    </View>
                    <View style={styles.contentContainer}>
                        <View style={styles.nameRow}>
                            <Text style={styles.name}>{item.name}</Text>
                            <View style={[styles.statusDot, { backgroundColor: item.status }]} />
                        </View>
                        <Text 
                            style={styles.messageText} 
                            numberOfLines={2} 
                            ellipsizeMode="tail"
                        >
                            {item.message}
                        </Text>
                        <Text style={styles.timeText}>{item.time}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <AppLayout 
        topColor={lightColor.background} 
        bottomColor={lightColor.background} 
        behaviour={null}
        >
            <View style={styles.container}>
                <AppHeader 
                    title="Messages" 
                    titleAlign="left" 
                    onLeftPress={() => navigation.navigate('Home')}
                    onRightPress={() => navigation.navigate('History')}
                />
                
                <View style={styles.contentWrapper}>
                    <SearchBar placeholder="Search Your messages" />

                    <FlatList
                        data={messages}
                        renderItem={renderMessageCard}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.messageList}
                    />
                </View> 
 
                <CustomButton   
                    title="Start a new chat"   
                    onPress={() => {}}  
                    style={styles.startChatButton}
                    backgroundColor={lightColor.primary}
                /> 
            </View> 
        </AppLayout>
    );
};

export default MessagePage;
