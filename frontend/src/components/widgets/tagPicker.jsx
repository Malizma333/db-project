import { SlTag, SlIconButton, SlDropdown, SlMenu, SlMenuItem } from '@shoelace-style/shoelace/dist/react';

const styles = {
  root: {
    alignItems: 'center',
    display: 'flex',
    height: '2em',
    justifyContent: 'start',
  },
  menu: {
    height: '8em',
  }
}

export default function TagPicker({ available=undefined, variant, selected, setSelected=undefined, viewMode=false }) {
  function onRemoveTag(i) {
    setSelected(selected.slice(0, i).concat(selected.slice(i + 1)))
  }

  function onAddTag(name) {
    setSelected(selected.concat([name]))
  }

  return (
    <div style={styles.root}>
      {selected.map((tag, index) => {
        return (
          <SlTag key={index} variant={variant} removable={!viewMode} size="small" onSlRemove={() => onRemoveTag(index)}>
            {tag}
          </SlTag>
        )
      })}
      {!viewMode && selected.length < available.length &&
        <SlDropdown>
          <SlIconButton slot="trigger" name="plus"></SlIconButton>
          <SlMenu style={styles.menu} onSlSelect={(e) => onAddTag(e.detail.item.value)}>
            {available.filter((tag) => !selected.includes(tag)).map((tag, _) => {
              return (
                <SlMenuItem value={tag}>
                  {tag}
                </SlMenuItem>
              )
            })}
          </SlMenu>
        </SlDropdown>
      }
    </div>
  )
}