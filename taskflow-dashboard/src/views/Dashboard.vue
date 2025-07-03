<!-- src/views/Dashboard.vue -->
<template>
  <div>
    <h2>Welcome to Dashboard</h2>
    <p><strong>Role:</strong> {{ role }}</p>

    <!-- Add / Edit Task Form -->
    <form @submit.prevent="isEditing ? updateTask() : addTask()">
      <input v-model="newTask" placeholder="Enter task title" required />
      <button type="submit">
        {{ isEditing ? 'Update Task' : 'Add Task' }}
      </button>
    </form>

    <!-- Task List -->
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.title }}

        <!-- Show Edit/Delete only if admin -->
        <template v-if="role === 'admin'">
          <button @click="editTask(task)">✏️</button>
          <button @click="deleteTask(task.id)">🗑️</button>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
import { db, auth } from '../firebase'
import {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  query,
  orderBy,
  updateDoc,
  getDoc
} from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'

export default {
  name: "DashboardView",
  data() {
    return {
      newTask: '',
      tasks: [],
      isEditing: false,
      editingId: null,
      role: 'member' // default until we fetch it
    }
  },
  methods: {
    async addTask() {
      if (!this.newTask.trim()) return;
      await addDoc(collection(db, "tasks"), {
        title: this.newTask,
        createdAt: new Date(),
        createdBy: auth.currentUser.uid
      });
      this.newTask = '';
    },
    async deleteTask(id) {
      await deleteDoc(doc(db, "tasks", id));
    },
    editTask(task) {
      this.newTask = task.title;
      this.editingId = task.id;
      this.isEditing = true;
    },
    async updateTask() {
      await updateDoc(doc(db, "tasks", this.editingId), {
        title: this.newTask
      });
      this.newTask = '';
      this.isEditing = false;
      this.editingId = null;
    }
  },
  async mounted() {
    // Load tasks in real-time
    const q = query(collection(db, "tasks"), orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      this.tasks = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    });

    // Wait for user to be authenticated
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          this.role = userSnap.data().role;
        } 
      } else {
        this.$router.push("/login");
      }
    });
  }
}
</script>
