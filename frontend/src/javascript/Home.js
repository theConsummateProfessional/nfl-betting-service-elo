import axios from 'axios'
import moment from 'moment'

export default {
    components:{
    },
    data() {
        return {
            selected: null,
            options: [
                {value: null, text: "Please select a week"},
                {value: 2, text: '2'},
                {value: 3, text: '3'},
                {value: 4, text: '4'},
                {value: 5, text: '5'},
                {value: 6, text: '6'},
                {value: 7, text: '7'},
                {value: 8, text: '8'},
                {value: 9, text: '9'},
                {value: 10, text: '10'},
                {value: 11, text: '11'},
                {value: 12, text: '12'},
                {value: 13, text: '13'},
                {value: 14, text: '14'},
                {value: 15, text: '15'},
                {value: 16, text: '16'},
                {value: 17, text: '17'}
            ],
            predictions_data: [],
            prediction: null
        }
    },
    methods: {
        get_selected_item: function(event){
            let self = this;
            axios.get('http://localhost:3000/predictions/' + event).then(function(data){
                self.predictions_data = data.data;
                for(var i = 0; i < self.predictions_data.length; i++){
                    self.predictions_data[i].date = moment(self.predictions_data[i].date).format('MMMM Do YYYY');
                }
                console.log(self.predictions_data);
            })
        },
    }
}