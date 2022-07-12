<template>
    <div>
      <draggable
        :list="rows"
        item-key="name"
        class="list-group"
        ghost-class="ghost"
      >
        <template #item="{ element }">
          <div @click="selectRow(element)" :class="classOfRow(element)">
            {{ element.title }}
          </div>
        </template>
      </draggable>
    </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
    components: {
        draggable,
    },

    data() {
        return {
            rows: [],
        };
    },

    methods: {
        addRows(rows) {
            this.rows.push(...rows);
        },
        removeRows(rows) {
            this.rows = this.rows.filter((row) => rows.indexOf(row) < 0);
        },
        getSelected() {
            return this.rows.filter((row) => row.selected);
        },
        selectRow(row) {
            row.selected = !row.selected;
        },
        classOfRow(row) {
            return row.selected ? ["row", "selected"] : ["row"];
        },
    },
};
</script>

<style scoped>
.row {
    height: 32px;
    margin-bottom: 8px;
    padding: 0 16px;
    cursor: pointer;
    border-radius: 8px;
    background-color: #f5f5f5;
}
.row.selected {
    background-color: red;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>
