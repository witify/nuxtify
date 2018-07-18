<template>
    <vue-typer id="typewriter" :text="titles" @typed-char="onTypedChar"></vue-typer>
</template>

<script>

if (process.browser) {
  var VueTyper = require('vue-typer').VueTyper
}

export default {
    components: {
        VueTyper
    },
    data() {
        return {
            countWord: 0,
            titles: [
                this.$t('pages.home.killer-web-app'),
                this.$t('pages.home.new-website'),
                this.$t('pages.home.engineering-team'),
            ]
        }
    },
    methods: {
        onTypedChar: function (typedChar, typedCharIndex) {
            if (typedCharIndex == 0) {
                this.countWord = 0;
                document.getElementById('typewriter').firstChild.innerHTML = '';
            }
            var lessNodes = document.getElementById('typewriter').lastChild.childNodes;
            if (typedChar == " " || lessNodes.length == 1) {

                var finalNodes = document.getElementById('typewriter').firstChild;
                var listNodes = finalNodes.childNodes;

                var newNode = document.createElement('span');

                var x = this.countWord;
                var countNodes = listNodes.length;
                while (x < countNodes) {
                    if (listNodes[this.countWord].innerHTML != " ")
                        newNode.insertAdjacentElement('beforeend', listNodes[this.countWord]);
                    else
                        this.countWord++;

                    // TODO: ADD LAST CHAR
                    x++;
                }
                newNode.className = 'nowrap';
                finalNodes.insertAdjacentElement('beforeend', newNode);

                this.countWord++;
            }
        },
    }
}
</script>
