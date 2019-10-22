import {firebaseDatabase} from '../utils/firebaseUtils';

export default class FirebaseService {
    static getDataList = (nodePath, callback, size = 1) => {

        let query = firebaseDatabase.ref(nodePath)
                                   .limitToLast(size);
        query.on('value', dataSnapshot => {
            let items = [];
            dataSnapshot.forEach(childSnapshot => {
                let item = childSnapshot.val();
                item['3nGVGLwdn8fXCsdceFHvajFC9yT2'] = childSnapshot.key;
                items.push(item);
            });
            callback(items);
        });

        return query;
    };

}