---

database-plugin: basic

---
[Go Up](README.md)
[[Courses_template]]

```yaml:dbfolder
name: My courses
description: All of my notes
columns:
  column1:
    input: text
    key: column1
    accessorKey: column1
    label: Column 1
    position: 1
    skipPersist: false
    isHidden: true
    sortIndex: -1
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
  __file__:
    key: __file__
    id: __file__
    input: markdown
    label: File
    accessorKey: __file__
    isMetadata: true
    skipPersist: false
    isDragDisabled: false
    csvCandidate: true
    isHidden: false
    sortIndex: -1
    position: 3
    width: 231
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: true
      task_hide_completed: true
  author:
    input: text
    accessorKey: author
    key: author
    label: author
    position: 7
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
  theme:
    input: text
    accessorKey: theme
    key: theme
    label: theme
    position: 6
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 402
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
  pin:
    input: checkbox
    accessorKey: pin
    key: pin
    label: pin
    position: 2
    skipPersist: false
    isHidden: false
    sortIndex: 1
    width: 37
    isSorted: true
    isSortedDesc: true
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
  assignment:
    input: select
    accessorKey: assignment
    key: assignment
    label: assignment
    position: 4
    skipPersist: false
    isHidden: false
    sortIndex: -1
    options:
      - { label: "algo", backgroundColor: "hsl(74, 95%, 90%)"}
      - { label: "Algo", backgroundColor: "hsl(161, 95%, 90%)"}
      - { label: "BBC News", backgroundColor: "hsl(354, 95%, 90%)"}
      - { label: "Elec", backgroundColor: "hsl(124, 95%, 90%)"}
      - { label: "Maths", backgroundColor: "hsl(299, 95%, 90%)"}
      - { label: "Prog", backgroundColor: "hsl(217, 95%, 90%)"}
      - { label: "TE", backgroundColor: "hsl(237, 95%, 90%)"}
      - { label: "THLR", backgroundColor: "hsl(307, 95%, 90%)"}
      - { label: "M", backgroundColor: "hsl(57, 95%, 90%)"}
      - { label: "Elphy", backgroundColor: "hsl(183, 95%, 90%)"}
      - { label: "Archi", backgroundColor: "hsl(353, 95%, 90%)"}
      - { label: "none", backgroundColor: "hsl(268, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
  state:
    input: select
    accessorKey: state
    key: state
    label: state
    position: 5
    skipPersist: false
    isHidden: false
    sortIndex: -1
    options:
      - { label: "Done", backgroundColor: "hsl(88.65168539325842,72.95081967213115%,47.843137254901954%)"}
      - { label: "Not Started", backgroundColor: "hsl(247.99999999999997,0%,60.78431372549019%)"}
      - { label: "WIP", backgroundColor: "hsl(37.42857142857143,91.30434782608697%,54.90196078431373%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
  link:
    input: text
    accessorKey: link
    key: link
    label: link
    position: 8
    skipPersist: false
    isHidden: true
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
  type:
    input: select
    accessorKey: type
    key: type
    label: type
    position: 9
    skipPersist: false
    isHidden: false
    sortIndex: -1
    options:
      - { label: "course", backgroundColor: "hsl(242, 95%, 90%)"}
      - { label: "full", backgroundColor: "hsl(315, 95%, 90%)"}
      - { label: "part", backgroundColor: "hsl(29, 95%, 90%)"}
      - { label: "test", backgroundColor: "hsl(6, 95%, 90%)"}
      - { label: "moc", backgroundColor: "hsl(42, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
  __created__:
    key: __created__
    id: __created__
    input: metadata_time
    label: Created
    accessorKey: __created__
    isMetadata: true
    isDragDisabled: false
    skipPersist: false
    csvCandidate: true
    width: 251
    position: 10
    isHidden: false
    sortIndex: 2
    isSorted: true
    isSortedDesc: true
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
  semester:
    input: text
    accessorKey: semester
    key: semester
    id: semester
    label: semester
    position: 100
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
config:
  remove_field_when_delete_column: false
  cell_size: normal
  sticky_first_column: false
  group_folder_column: 
  show_metadata_created: true
  show_metadata_modified: false
  show_metadata_tasks: false
  show_metadata_inlinks: false
  show_metadata_outlinks: false
  source_data: current_folder
  source_form_result: Courses
  source_destination_path: Courses
  frontmatter_quote_wrap: false
  row_templates_folder: /
  current_row_template: 
  pagination_size: 200
  formula_folder_path: /
  inline_default: false
  inline_new_position: top
  date_format: yyyy-MM-dd
  datetime_format: "yyyy-MM-dd HH:mm:ss"
  remove_empty_folders: false
  automatically_group_files: false
  hoist_files_with_empty_attributes: true
  enable_js_formulas: false
  enable_footer: false
filters:
  enabled: true
  conditions:
      - field: type
        operator: NOT_EQUAL
        value: "part"
```