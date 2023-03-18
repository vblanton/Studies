https://www.educative.io/courses/learn-rust-from-scratch

fn main() {
    println!("Hello World!");
}

// note: macros are like functions in Rust, they run code within code. macros have an ! after them like println!
// semicolons can only be omitted at the end of the last statement

// use a placeholder to print a number or variable:
println!("Number: {}", 1);
println!("{} is a {} company", "Educative", "Software");
// positional:
println!("Enhance your coding skills from {0} courses.  {0} courses are very {1}", "Educative", "interactive");
// named:
println!("{company} provides {kind} courses", company = "Educative", kind = "interactive");
// convert to binary, hex or octal automatically with a placeholder:
println!("Number : 10 \nBinary:{:b} Hexadecimal:{:x} Octal:{:o}", 10, 10, 10);
// use a debug trait to write many values in a placeholder:
println!("{:?}", ("This is a Rust Course", 101));


print!()
println!()
eprint!() // print as an error
eprintln!()

// line comment
/* block comment */

/// outer doc comment
//! inner doc comment (inside function, macro)

