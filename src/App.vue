<script>
import SendAlert from './components/SendAlert.vue';
import NotificationList from './components/view-notifications.vue';

export default {
  components: {
    NotificationList,
    SendAlert,
  },
  data() {
    return {
      NotificationData: [],
      alertMessage: '',
    };
  },
  methods: {

    addNotification() {
      // Generate a new report object with random severity and location
      const severityOptions = ['Alto', 'Medio', 'Bajo'];
      const randomSeverity = severityOptions[Math.floor(Math.random() * severityOptions.length)];

      const locationOptions = ['Lince', 'Los Olivos', 'Lurigancho', 'Lurín', 'Magdalena del Mar', 'Miraflores'];
      const randomLocation = locationOptions[Math.floor(Math.random() * locationOptions.length)];

      const newNotification = {
        id: this.NotificationData.length + 1,
        location: "A robbery has been reported in " + randomLocation,
        severity: randomSeverity,
      };

      this.NotificationData.push(newNotification);
    },
    showSendAlert() {
      this.alertMessage = 'Alert Sent'; // Set message to be displayed
    },
    hideSendAlert() {
      this.alertMessage = ''; // Clear message to hide popup
    },
  },
};
</script>
<template>
  <main>
    <div>
      <button @click="addNotification">Update Notification</button>

      <NotificationList
          :Notifications="NotificationData"
          :addNotification="addNotification"
      />
    </div>

    <button class="send-alert" @click="showSendAlert">Send Alert</button>

    <SendAlert
        :message="alertMessage"
        :togglePopup="hideSendAlert"
    />
  </main>

</template>
<style>
body {
  background-color: #01a1ff;
}
.send-alert{
  align-items: center;

}
</style>

