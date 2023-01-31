export default function EmojiList ({ handleIcon }) {
  const emojis = ['🎁', '💵', '🏠', '🔈', '🃏', '🌐', '💤', '❤️', '📚', '📊', '📰', '🔖', '🔍', '🎉', '🛒', '🪑', '🔑', '💊', '🔮', '⚰️', '🛠️', '💎', '📺', '💻', '📱', '📽️', '✈️', '🚗', '🏍️', '🚲', '🎯', '🎮', '🎰', '🎼', '🎭', '🎨', '🎬', '🏆', '⚽', '🍼', '☕', '🍻', '🍏', '🌊', '☔', '🐶', '🐱', '💼', '👜', '🎒', '🎓', '🥼', '👕', '👖', '👔', '👗', '👟', '❔', '📦', '🤒', '🤑', '👽', '🤖', '🎃', '👨‍🏫', '🎅🏻', '💅', '👩‍❤️‍👨', '👶'
  ]
  return (
    <div className='max-h-64 overflow-y-auto'>
      {emojis.map((emoji) => (
        <button key={emoji} className='text-2xl' onClick={handleIcon}>
          {emoji}
        </button>
      ))}
    </div>
  )
}
