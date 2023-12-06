// src/HelperFunctions/getRelativeDate.ts

function getTimeAgo(createdDate: Date): string {
  if (!createdDate) {
    return "Date not provided";
  }

  // Ensure the input is a valid Date object
  if (!(createdDate instanceof Date) || isNaN(createdDate.getTime())) {
    return "Invalid date format";
  }

  const now = new Date();
  const difference = now.getTime() - createdDate.getTime();
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  if (days > 365) {
    const years = Math.floor(days / 365);
    return `${years} year${years > 1 ? "s" : ""} ago`;
  }

  if (days >= 30) {
    const months = Math.floor(days / 30);
    return `${months} month${months > 1 ? "s" : ""} ago`;
  }

  if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  }

  const minutes = Math.floor(difference / (1000 * 60));
  if (minutes < 1) {
    return "just now";
  }

  if (minutes < 60) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  }

  const hours = Math.floor(minutes / 60);
  return `${hours} hour${hours > 1 ? "s" : ""} ago`;
}

export function getRelativeDate(birthday: Date): string {
  const birthDate = new Date(birthday);
  const timeAgo = getTimeAgo(birthDate);
  // Simplified calculation; can be enhanced as needed
  return timeAgo;
}
