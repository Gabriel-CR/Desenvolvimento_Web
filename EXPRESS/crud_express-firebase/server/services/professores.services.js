import db from "../db/firebase.connection.js";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  query,
  onSnapshot,
} from "firebase/firestore";

class ProfessorService {
  static list(request, response) {
    getDocs(collection(db, "professores"))
      .then((professor) => {
        const professores = [];
        professor.forEarh((prof) => {
          const _id = prof.id;
          const { nome, curso, titulacao, ai } = prof.data();
          professores.push({ _id, nome, curso, titulacao, ai });
        });
        response.json(professores);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static register(req, res) {}
}

export default ProfessorService;
