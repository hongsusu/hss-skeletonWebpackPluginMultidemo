import Vue from 'vue';
import Skeleton1 from './Skeleton1';
import Skeleton2 from './Skeleton2';
import Skeleton3 from './Skeleton3';

export default new Vue({
    components: {
        Skeleton1,
        Skeleton2,
        Skeleton3,
    },
    template: `
        <div>
            <skeleton1 id="skeleton1" style="display:none"/>
            <skeleton2 id="skeleton2" style="display:none"/>
            <skeleton3 id="skeleton3" style="display:none"/>
        </div>
    `
});
