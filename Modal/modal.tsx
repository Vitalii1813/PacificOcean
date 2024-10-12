import {useEffect, useState} from 'react';
import {Pressable} from 'react-native';
import {ActivityIndicator, Dimensions, Modal, Text, View} from 'react-native';

export default function LoaderModal({
  modalVisible,
  end,
  title,
  description,
}: any) {
  const [ls, setLs] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLs(false);
    }, 3000);
  }, []);

  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#00000090',
        }}>
        {ls ? (
          <View
            style={{
              width: '80%',
              alignSelf: 'center',
              backgroundColor: '#7A9EA0',
              height: '30%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 40,
            }}>
            <ActivityIndicator size={'large'} color={'#FFF'} />
          </View>
        ) : (
          <View
            style={{
              width: '80%',
              alignSelf: 'center',
              backgroundColor: '#7A9EA0',
              paddingVertical: 10,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 30,
              gap: 20,
            }}>
            <Text
              style={{
                fontSize: Dimensions.get('screen').width * 0.065,
                fontWeight: '800',
                color: '#FFF',
                textAlign: 'center',
                width: '90%',
                alignSelf: 'center',
              }}>
              {title}
            </Text>

            <Text
              style={{
                fontSize: Dimensions.get('screen').width * 0.0567,
                fontWeight: '500',
                color: '#FFF',
                textAlign: 'justify',
                width: '90%',
                alignSelf: 'center',
              }}>
              {description}
            </Text>

            <Pressable
              hitSlop={20}
              onPress={end}
              style={{
                width: '90%',
                alignSelf: 'center',
                backgroundColor: '#01172F',
                paddingVertical: 4,
                borderRadius: 12,
              }}>
              <Text
                style={{
                  color: '#FFF',
                  textAlign: 'center',
                  fontSize: Dimensions.get('screen').width * 0.065,
                  fontWeight: '700',
                }}>
                Close
              </Text>
            </Pressable>
          </View>
        )}
      </View>
    </Modal>
  );
}
