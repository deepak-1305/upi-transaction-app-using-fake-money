import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
  Dimensions
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { BarChart } from 'react-native-chart-kit';
import * as Animatable from 'react-native-animatable';

export default function App() {
  const [balance, setBalance] = useState(74230.5);
  const [transactions, setTransactions] = useState([
    { id: 1, desc: "₹500 sent to xyz@upi" },
    { id: 2, desc: "₹1200 paid to abc@bank" },
    { id: 3, desc: "₹300 recharge" }
  ]);

  const handleSendMoney = () => {
    if (balance >= 500) {
      setBalance(balance - 500);
      const newTx = { id: transactions.length + 1, desc: "₹500 sent to demo@upi" };
      setTransactions([newTx, ...transactions]);
      Alert.alert("✅ Transaction Successful", "₹500 sent!");
    } else {
      Alert.alert("⚠️ Insufficient Balance", "You don’t have enough funds.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        
        {/* Animated Balance Card */}
        <Animatable.View animation="fadeInDown" duration={1200}>
          <LinearGradient colors={['#7b2ff7', '#f107a3']} style={styles.balanceCard}>
            <Text style={styles.balanceTitle}>Your Balance</Text>
            <Text style={styles.balanceValue}>₹{balance.toFixed(2)}</Text>
            <View style={styles.row}>
              <Text style={styles.income}>Income: ₹15,000</Text>
              <Text style={styles.expenses}>Expenses: ₹3,200</Text>
            </View>
          </LinearGradient>
        </Animatable.View>

        {/* Animated Bar Chart */}
        <Animatable.View animation="fadeInUp" duration={1500}>
          <View style={styles.analyticsCard}>
            <Text style={styles.analyticsTitle}>📊 Spending Analytics</Text>
            <BarChart
              data={{
                labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
                datasets: [{ data: [5000, 7500, 3000, 6000, 9000] }]
              }}
              width={Dimensions.get("window").width - 40}
              height={220}
              yAxisLabel="₹"
              chartConfig={{
                backgroundColor: "#1a1a2e",
                backgroundGradientFrom: "#0f3460",
                backgroundGradientTo: "#16213e",
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: () => "#fff",
                style: { borderRadius: 16 },
                propsForBackgroundLines: { stroke: "#444" }
              }}
              style={{ borderRadius: 16 }}
            />
          </View>
        </Animatable.View>

        {/* Quick Actions with Pulse Animation */}
        <Animatable.View animation="zoomIn" duration={1000} style={styles.grid}>
          <Animatable.View animation="pulse" iterationCount="infinite" duration={2000}>
            <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#2196f3' }]} onPress={handleSendMoney}>
              <Text style={styles.actionText}>📤 Send Money</Text>
            </TouchableOpacity>
          </Animatable.View>
          <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#4caf50' }]} onPress={() => Alert.alert("Coming Soon", "Request Money feature")}>
            <Text style={styles.actionText}>📥 Request Money</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#ff9800' }]} onPress={() => Alert.alert("Coming Soon", "QR Scanner feature")}>
            <Text style={styles.actionText}>🔍 Scan QR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#e91e63' }]} onPress={() => Alert.alert("Coming Soon", "Bill Payment feature")}>
            <Text style={styles.actionText}>💡 Pay Bills</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#00bcd4' }]} onPress={() => Alert.alert("Coming Soon", "Beneficiary Management feature")}>
            <Text style={styles.actionText}>➕ Beneficiary</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#9c27b0' }]} onPress={() => Alert.alert("Settings", "More controls coming soon")}>
            <Text style={styles.actionText}>⚙️ Settings</Text>
          </TouchableOpacity>
        </Animatable.View>

        {/* Transaction History with Slide Animation */}
        <Animatable.View animation="fadeInUp" duration={1200} style={styles.historyCard}>
          <Text style={styles.historyTitle}>📜 Recent Transactions</Text>
          {transactions.map(tx => (
            <Animatable.Text
              key={tx.id}
              animation="slideInLeft"
              duration={800}
              style={styles.historyItem}
            >
              {tx.desc}
            </Animatable.Text>
          ))}
        </Animatable.View>
      </ScrollView>

      {/* Bottom Navigation */}
      <Animatable.View animation="fadeInUp" duration={1500} style={styles.bottomNav}>
        <Text style={styles.navItem}>🏠 Home</Text>
        <Text style={styles.navItem}>🕒 History</Text>
        <Text style={styles.navItem}>🎁 Rewards</Text>
        <Text style={styles.navItem}>⋮ More</Text>
      </Animatable.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1a1a2e' },
  scroll: { alignItems: 'center', padding: 20 },
  balanceCard: {
    padding: 20,
    borderRadius: 15,
    width: '90%',
    marginBottom: 20,
    shadowColor: '#00f',
    shadowOpacity: 0.6,
    shadowRadius: 15,
    elevation: 10,
  },
  balanceTitle: { fontSize: 18, color: '#fff' },
  balanceValue: { fontSize: 28, fontWeight: 'bold', color: '#fff', marginVertical: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  income: { color: 'lime', fontWeight: '600' },
  expenses: { color: 'red', fontWeight: '600' },
  analyticsCard: {
    backgroundColor: '#0f3460',
    padding: 15,
    borderRadius: 15,
    width: '90%',
    marginBottom: 20,
    elevation: 6,
  },
  analyticsTitle: { fontSize: 20, fontWeight: 'bold', color: '#fff', marginBottom: 10 },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 20,
  },
  actionButton: {
    padding: 15,
    borderRadius: 12,
    marginVertical: 5,
    width: '45%',
    alignItems: 'center',
    shadowColor: '#fff',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  actionText: { color: '#fff', fontWeight: '600' },
  historyCard: {
    backgroundColor: '#16213e',
    padding: 15,
    borderRadius: 15,
    width: '90%',
    elevation: 4,
  },
  historyTitle: { fontSize: 20, fontWeight: 'bold', color: '#fff', marginBottom: 10 },
  historyItem: { fontSize: 16, marginVertical: 5, color: '#ddd' },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#0f3460',
    paddingVertical: 15,
  },
  navItem: { color: '#fff', fontSize: 16, fontWeight: '600' },
});