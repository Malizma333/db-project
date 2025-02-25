import { useState } from "preact/hooks";
import { SlTag, SlIconButton, SlDropdown, SlMenu, SlMenuItem } from '@shoelace-style/shoelace/dist/react';

const styles = {
  root: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  menu: {
    height: '8em',
  }
}

export default function TagPicker({ availableTags, initTags }) {
  const [ currentTags, setTags ] = useState(initTags);
  function onRemoveTag(i) {
    console.log('Remove', i, currentTags[i])
    setTags(currentTags.slice(0, i).concat(currentTags.slice(i + 1)))
  }

  function onAddTag(name) {
    console.log('Add', name)
    setTags(currentTags.concat([name]))
  }

  return (
    <div style={styles.root}>
      {currentTags.map((tagName, index) => {
        return (
          <SlTag key={index} variant="warning" removable size="small" onSlRemove={() => onRemoveTag(index)}>
            {tagName}
          </SlTag>
        )
      })}
      {currentTags.length < availableTags.length &&
        <SlDropdown>
          <SlIconButton slot="trigger" name="plus"></SlIconButton>
          <SlMenu style={styles.menu} onSlSelect={(e) => onAddTag(e.detail.item.value)}>
            {availableTags.filter((tag) => !currentTags.includes(tag)).map((tagName, index) => {
              return (
                <SlMenuItem value={tagName}>
                  {tagName}
                </SlMenuItem>
              )
            })}
          </SlMenu>
        </SlDropdown>
      }
    </div>
  )
}