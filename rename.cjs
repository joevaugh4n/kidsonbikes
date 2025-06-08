const fs = require('fs');
const path = require('path');

// Define the mapping of old names to new names
const renameMap = {
  '033_one_day_off_in_hackney_-_d_cpl.jpg': 'hackney-street.jpg',
  '10500.webp': 'retro-car.webp',
  'david-bowie-1985-labrynth-billboard-1250.webp': 'bowie-labyrinth.webp',
  'david-bowie-1985-swipe-v0-8xlkcis4i4n91.webp': 'bowie-portrait.webp',
  'gb4-1024x644.jpg': 'ghostbusters.jpg',
  'marie.jpg': 'marie.jpg', // Keep as is
  'sheffield-united-1980s-british-culture-archive-bill-stephenson-3.webp': 'sheffield-united.webp',
  'shoulderpads.jpg': 'shoulderpads.jpg', // Keep as is
  'simonlebon.jpg': 'simon-lebon.jpg',
  'sodastereo.png': 'soda-stereo.png',
  'stjames.webp': 'st-james.webp',
  'tff-1985.webp': 'tears-for-fears.webp',
  'the-moor-in-the-run-up-to-christmas-1977-v0-465ojbzo3i3e1.webp': 'the-moor-christmas.webp',
  'tony.png': 'tony.png', // Keep as is
  'Walk-through-1980s-London-12.jpg': 'london-80s.jpg',
  'Winona-Ryder-80s.webp': 'winona-ryder.webp'
};

const assetsDir = path.join(__dirname, 'src', 'assets');

// Function to rename files
function renameFiles() {
  console.log('Starting file rename process...\n');
  
  // Check if assets directory exists
  if (!fs.existsSync(assetsDir)) {
    console.error('Assets directory not found:', assetsDir);
    return;
  }

  let renamedCount = 0;
  let errorCount = 0;

  for (const [oldName, newName] of Object.entries(renameMap)) {
    const oldPath = path.join(assetsDir, oldName);
    const newPath = path.join(assetsDir, newName);

    try {
      // Check if old file exists
      if (fs.existsSync(oldPath)) {
        // Check if new file already exists
        if (fs.existsSync(newPath) && oldName !== newName) {
          console.warn(`⚠️  Skipping ${oldName} - ${newName} already exists`);
          continue;
        }

        // Rename the file
        if (oldName !== newName) {
          fs.renameSync(oldPath, newPath);
          console.log(`✅ Renamed: ${oldName} → ${newName}`);
          renamedCount++;
        } else {
          console.log(`ℹ️  Kept: ${oldName}`);
        }
      } else {
        console.warn(`⚠️  File not found: ${oldName}`);
      }
    } catch (error) {
      console.error(`❌ Error renaming ${oldName}:`, error.message);
      errorCount++;
    }
  }

  console.log(`\n📊 Summary:`);
  console.log(`   Renamed: ${renamedCount} files`);
  console.log(`   Errors: ${errorCount} files`);
  console.log(`   Total processed: ${Object.keys(renameMap).length} files`);
}

// Function to generate the new import statements
function generateImports() {
  console.log('\n📋 New import statements for your App.tsx:');
  console.log('================================');
  
  Object.values(renameMap).forEach((filename, index) => {
    const varName = `img${index + 1}`;
    console.log(`import ${varName} from './assets/${filename}'`);
  });
  
  console.log('\n// Gallery array:');
  const varNames = Object.values(renameMap).map((_, index) => `img${index + 1}`);
  console.log(`const gallery = [${varNames.join(', ')}]`);
}

// Run the script
console.log('🚀 Asset Renamer Script');
console.log('=======================\n');

renameFiles();
generateImports();

console.log('\n✨ Done! You can now update your App.tsx with the new import statements above.');