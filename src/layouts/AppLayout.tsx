import React, { useEffect, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  View,
} from "react-native";
import {
  useSafeAreaInsets,
} from "react-native-safe-area-context";

interface AppLayoutProps {
  children: React.ReactNode;
  scrollable?: boolean;
  topColor?: string;
  bottomColor?: string;
  gradientColors?: string[];
  gradientStart?: { x: number; y: number };
  gradientEnd?: { x: number; y: number };
  bottom? : boolean,
  behaviour?  : any
  barStyle? : any
}



const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  barStyle,
  scrollable = false,
  topColor = "white",
  bottomColor = "white",
  bottom  = true ,
  behaviour 
}) => {
  const insets = useSafeAreaInsets();




const [keyboardup, setKeyboardup] = useState(false);

useEffect(() => {
  const showSub = Keyboard.addListener('keyboardDidShow', (e: any) => {
    setKeyboardup(true);
  });

  const hideSub = Keyboard.addListener('keyboardDidHide', () => {
    setKeyboardup(false);
  });

  return () => {
    showSub.remove();
    hideSub.remove();
  };
}, []);



  return (
    <View style={{ flex: 1, backgroundColor: topColor }}>
      <StatusBar
        translucent={false}
        backgroundColor={topColor}
        barStyle={barStyle??"dark-content"}  
      />

      <KeyboardAvoidingView 
        style={{ flex: 1 }} 
        behavior={behaviour || (Platform.OS === 'ios' ? 'padding' : undefined)} 
        enabled={behaviour !== null && (Platform.OS === 'ios' ? true : keyboardup)} 
      >
        <View
          style={{
            flex: 1,
            paddingTop: insets.top,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          }}
        >
          
            {scrollable ? (
              <ScrollView
                contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start' }}
                keyboardShouldPersistTaps="handled"
                bounces={false}
                overScrollMode="never"
                nestedScrollEnabled
                showsVerticalScrollIndicator={false}
                
              >
                {children}
              </ScrollView>
            ) : (
              <View style={{ flex: 1 }}>{children}</View>
            )}

        </View>
      </KeyboardAvoidingView>

      {bottom && <View style={{ height: insets.bottom, backgroundColor: bottomColor }} />}


    </View>
  );
};

export default AppLayout;
















