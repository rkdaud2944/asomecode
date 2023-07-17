<template>
    <h3>블록코딩 화면</h3>
    <div ref="blocklyDiv" style="height: 480px; width: 600px;"></div>
    
</template>

<script>
    import Blockly from "blockly";
    // import "blockly/blocks_compressed";



    export default {
        data() {
            return {
            }
        },

        beforeMount(){
            this.$nextTick(() => {
                const workspace = Blockly.inject(this.$refs.blocklyDiv, {
                    toolbox: `
                    <xml>
                        <block type="controls_if"></block>
                        <block type="controls_repeat_ext"></block>
                        <block type="logic_compare"></block>
                        <block type="math_number"></block>
                        <block type="math_arithmetic"></block>
                    </xml>
                    `,
                });

                workspace.addChangeListener(() => {
                    this.handleWorkspaceChange(workspace);
                });
            });
        },

        methods: {
            handleWorkspaceChange(workspace) {
            // 작업공간 변경사항 처리 로직
            console.log("작업공간 변경사항 처리 로직 실행"+workspace);
            },
        },
    }


</script>