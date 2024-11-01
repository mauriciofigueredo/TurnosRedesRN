     
    import { Button, Text } from "@ui-kitten/components";
import moment from "moment";
import React, { useState } from "react";
    import { StyleSheet, View } from "react-native";
    import DateTimePickerModal from "react-native-modal-datetime-picker";
    

    const DateSelector = () => {
        
      const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

      const [date, setDate] = useState(new Date())
      console.log(moment(date).format("DD-MM-YYYY"))
      
      
    
      const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
    
      const hideDatePicker = () => {
        setDatePickerVisibility(false);
        
      };
    
      const handleConfirm = (date:Date) => {
        setDate(date);
        hideDatePicker();
      };
    
      return (
        <View style={styles.dateSelector}>
            
            <Text category="h5" style={styles.fecha}
            >Fecha: { moment(date).format("DD-MM-YYYY")} </Text>
          <Button style={styles.buton}onPress={showDatePicker} >Seleccionar fecha</Button>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
      );
    };
    
    export default DateSelector;

const styles = StyleSheet.create({
    fecha: {
        alignSelf: "center",
        marginBottom:8
    },
    dateSelector: {
        marginVertical: 8
    },
    buton: {
        borderRadius: 20
    }
})